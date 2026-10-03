# Talewick

## Git workflow

Commit automatically after each completed, working change. Do not wait to be asked. Do not push unless asked.

### Commit message format

Conventional Commits, with the new version appended to the subject:

```
<type>(<scope>): <short imperative description> (vMAJOR.MINOR.PATCH)
```

Examples:

```
feat(editor): add chapter outline panel (v0.2.0)
fix(auth): handle expired session token (v0.2.1)
chore(deps): bump react to 19.1 (v0.2.2)
feat(api)!: replace story schema with v2 format (v1.0.0)
```

- Types: `feat`, `fix`, `perf`, `refactor`, `docs`, `style`, `test`, `build`, `ci`, `chore`, `revert`.
- Scope: short lowercase area of the codebase (`editor`, `auth`, `deps`, `claude`). Required.
- Description: imperative mood, lowercase start, no trailing period, subject under ~72 chars.
- Body (optional): explain why, wrapped at 72 chars.
- Breaking change: add `!` after the scope and a `BREAKING CHANGE:` footer.
- One logical change per commit. Never commit secrets, `.env` files or build output.

### Versioning

Semantic versioning, `MAJOR.MINOR.PATCH`. The current version lives in `VERSION` at the repo root (one line, e.g. `0.1.0`). Every commit bumps it:

| Change | Bump | Example |
|---|---|---|
| Breaking change (`!`) | MAJOR, reset minor and patch | 0.4.2 → 1.0.0 |
| `feat` | MINOR, reset patch | 0.4.2 → 0.5.0 |
| Anything else | PATCH | 0.4.2 → 0.4.3 |

Steps for each commit:

1. Read `VERSION`, compute the new version from the commit type.
2. Write the new version to `VERSION` (and `package.json` `version` or other manifests once they exist, kept in sync).
3. Stage the change plus the version file(s) in the same commit.
4. Commit with the version in the subject.
