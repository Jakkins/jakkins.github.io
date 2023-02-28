# Fast setup

```bash
# run as admin
python.exe -m pip install --proxy protocol://host:port --upgrade pip
pip install --proxy protocol://host:port mkdocs
# mkdocs.exe --version
```

```bash
mkdocs.exe new my-project
cd my-project
mkdocs.exe serve
# do editing
mkdocs.exe build
```

# Remember

**_Without_** the nav inside the mkdocs.yml, the theme will create a dynamic menu following the directory tree inside the docs.

```bash
my-project
	docs
		index.md
		dir1
			page2.md
	mkdocs.yml
```

## mkdocs.yml

```yaml
site_name: MkDocs

site_name: 'Windmill Dark MkDocs Theme'
site_description: 'MkDocs theme focused on navigation and usability.'
site_author: 'Alexandre ZANNI'

repo_url: https://github.com/noraj/mkdocs-windmill-dark

theme:
    name: windmill-dark
    static_templates:
        - 404.html

markdown_extensions:
    - toc:
        permalink: '#'

# nav:
#     - Usage: index.md

extra:
    version: 0.1.4
```
