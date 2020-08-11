# Migration `20200810015548-init`

This migration has been generated by Marcio Souza Filho at 8/9/2020, 10:55:48 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "User" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"email" TEXT NOT NULL,
"password" TEXT NOT NULL)

CREATE TABLE "Flashcard" (
"id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
"question" TEXT NOT NULL,
"answer" TEXT NOT NULL,
"is_bookmarked" BOOLEAN NOT NULL,
"is_known" BOOLEAN NOT NULL,
"views" INTEGER NOT NULL,
"user_id" INTEGER NOT NULL,
FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")

PRAGMA foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200810014153-init..20200810015548-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,26 +1,26 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model User {
-  id        Int         @id @default(autoincrement())
-  email     String      @unique
-  password  String
+  id         Int         @id @default(autoincrement())
+  email      String      @unique
+  password   String
   flashcards Flashcard[]
 }
 model Flashcard {
   id           Int     @id @default(autoincrement())
   question     String
   answer       String
-  isBookmarked Boolean
-  isKnown      Boolean
+  is_bookmarked Boolean
+  is_known     Boolean
   views        Int
-  user         User    @relation(fields: [userId], references: [id])
-  userId       Int
+  user         User    @relation(fields: [user_id], references: [id])
+  user_id      Int
 }
```

