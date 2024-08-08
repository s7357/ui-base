# UI Base

## Install

```sh
m='ui-base'; git submodule add "https://github.com/s7357/${m}.git" "themes/${m}"
```

## Update

```sh
git submodule update --recursive --remote --merge
```

## Uninstall

```sh
m='ui-base'; git submodule deinit -f "themes/${m}"; git rm -r --cached "themes/${m}"; rm -rf ".git/modules/themes/${m}"; rm -rf "themes/${m}"
```
