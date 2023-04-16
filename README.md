# Abaseppuku

This is a [Next.js](https://nextjs.org/) project bootstrapped with Bun. Abasuppuku is an assassination game to be played with fellow computer science students.

## Getting Started

For being able to run the prosjekt [bun](https://bun.sh/) has to be installed

### Development frontend

```sh
cd client
bun dev
```

Note: sometimes bun bugs out and localhost wont refresh on save. rerun bun dev if such is the case

### Development backend

```bash
cd server
docker-compose up -d
bun dev:server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about the stack, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [bun](https://bun.sh/) - Bun is a fast all-in-one JavaScript runtime.
- [express](https://expressjs.com/en/5x/api.html) - Fast, unopinionated, minimalist web framework for Node.js.
