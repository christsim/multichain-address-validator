import { readFileSync } from "fs";
import { execSync } from "child_process";
import { createInterface } from "readline";

const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const version = pkg.version;
const tag = `v${version}`;

console.log();
console.log(`  Current version: ${version}`);
console.log(`  Tag to create:   ${tag}`);
console.log();

// Check if tag already exists locally
try {
  execSync(`git rev-parse ${tag}`, { stdio: "ignore" });
  console.error(
    `  Error: Tag ${tag} already exists locally.`
  );
  console.error(
    `  Did you forget to bump the version in package.json?`
  );
  process.exit(1);
} catch {
  // Tag doesn't exist locally — good
}

// Check if tag already exists on remote
try {
  execSync(`git ls-remote --tags origin refs/tags/${tag}`, {
    stdio: "pipe",
  });
  const result = execSync(`git ls-remote --tags origin refs/tags/${tag}`, {
    encoding: "utf8",
  }).trim();
  if (result.length > 0) {
    console.error(`  Error: Tag ${tag} already exists on remote.`);
    console.error(`  Did you forget to bump the version in package.json?`);
    process.exit(1);
  }
} catch {
  // ls-remote failed — likely no matching tag, which is fine
}

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`  Release ${tag}? (y/n) `, (answer) => {
  rl.close();

  if (answer.toLowerCase() !== "y") {
    console.log("  Aborted.");
    process.exit(0);
  }

  console.log();

  try {
    execSync(`git tag ${tag}`, { stdio: "inherit" });
    console.log(`  Created tag ${tag}`);
  } catch (err) {
    console.error(`  Failed to create tag: ${err.message}`);
    process.exit(1);
  }

  try {
    execSync(`git push origin HEAD --tags`, { stdio: "inherit" });
    console.log(`  Pushed to origin with tags`);
  } catch (err) {
    console.error(`  Failed to push: ${err.message}`);
    // Clean up the local tag since push failed
    try {
      execSync(`git tag -d ${tag}`, { stdio: "ignore" });
    } catch {
      // ignore cleanup failure
    }
    process.exit(1);
  }

  console.log();
  console.log(
    `  GitHub Actions will now build, test, and publish to npm.`
  );
  console.log();
});
