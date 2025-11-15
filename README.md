# Spendlyx Front

This project runs an Angular frontend inside a Docker container using Node 22.  
It was generated with [Angular CLI](https://github.com/angular/angular-cli) v20.3.8.

---

## 🚀 Development

Start the development server with Docker Compose:

```bash
docker compose up -d
```

Then open your browser at:

```
http://localhost:4200/
```

The application will automatically reload when files in the `src/` directory change.

To open an interactive shell inside the running container:

```bash
docker exec -it spendlyx-front sh
```

To stop the containers:

```bash
docker compose down
```

---

## 🧭 Structure

- `Dockerfile` → container build definition (Node 22)
- `compose.yml` → container orchestration file
- `src/` → Angular application source code

---

## 📚 More Information

For complete Angular CLI usage and options, see the  
[Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).
