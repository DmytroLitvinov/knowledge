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
- [Postgres Tips & Tricks](https://www.crunchydata.com/postgres-tips)
- [Analysis and optimization SQL queries. Some PL/pgSQL scripts](https://github.com/andyatkinson/pg_scripts)
- [Learn Postgres at the Playground](https://www.crunchydata.com/blog/learn-postgres-at-the-playground)
- [PGLoader](https://github.com/dimitri/pgloader) - Migrate to PostgreSQL in a single command!
- [Understanding the Postgres EXPLAIN cost](https://scalegrid.io/blog/postgres-explain-cost/)
- [Scaling PostgresML to 1 Million Requests per Second](https://postgresml.org/blog/scaling-postgresml-to-one-million-requests-per-second/)
- [Individual PostgreSQL instances to everyone](https://nhost.io/blog/individual-postgres-instances) - Why we moved from AWS RDS to Postgres in Kubernetes
- [Топ полезных SQL-запросов для PostgreSQL (2022)](https://habr.com/en/post/696274/)
- [Django PostgreSQL Database Connection Pooling with PgBouncer (2023)](https://saadmk11.github.io/blog/posts/django-postgresql-database-connection-pooling-with-pgbouncer/)