---
title: PostgreSQL
---

[Cannot install psycopg2 with pip3 on M1 Mac](https://stackoverflow.com/questions/66888087/cannot-install-psycopg2-with-pip3-on-m1-mac/67166417#67166417)

```bash
export LDFLAGS="-L/opt/homebrew/opt/openssl@1.1/lib -L/opt/homebrew/opt/libpq/lib"
export CPPFLAGS="-I/opt/homebrew/opt/openssl@1.1/include -I/opt/homebrew/opt/libpq/include"
```



## Links

- [Five Tips For a Healthier Postgres Database in the New Year (2021)](https://blog.crunchydata.com/blog/five-tips-for-a-healthier-postgres-database-in-the-new-year)
- [PostgreSQL collation](https://solovyov.net/blog/2022/postgresql-collation/)