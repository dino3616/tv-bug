# tv-bug

Minimally configured repository for reproducing bugs in [tailwind-variants](https://github.com/nextui-org/tailwind-variants/). 🦄

## Setup

### clone git repository

```bash
git clone "https://github.com/dino3616/tv-bug"
```

### launch conatiner

```bash
docker compose -f "./docker/docker-compose.development.yaml" -p "tv-bug" up -d
```

### set env variables

See `.env.example` for more details.
