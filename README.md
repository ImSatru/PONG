# 🏓 PONG

Backend application built with **NestJS** to manage ping pong matches, players, and rankings.  
It supports real-time communication via **WebSockets** and ensures match validation between real accounts.

---

## 🚀 Features
- User registration and player management.  
- Match creation and validation (both players must accept).  
- Real-time updates with WebSockets.  
- Player ranking based on match results.  
- Database integration (PostgreSQL / MySQL).  

---

## 🛠️ Tech Stack
- [NestJS](https://nestjs.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [WebSockets](https://docs.nestjs.com/websockets/gateways)  
- [TypeORM](https://typeorm.io/) or [Prisma](https://www.prisma.io/)  
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)  
- [Jest](https://jestjs.io/)  

---

## 📦 Setup
```bash
# Clone repository
git clone https://github.com/ImSatru/PONG
cd PONG

# Install dependencies
npm install

# Run in dev mode
npm run start:dev
