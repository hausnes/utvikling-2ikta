/* SQLite3 */

CREATE TABLE IF NOT EXISTS `users` (
  `id` INTEGER PRIMARY KEY AUTOINCREMENT,
  `username` TEXT NOT NULL,
  `passord` TEXT NOT NULL,
  `epost` TEXT NOT NULL,

);

CREATE TABLE IF NOT EXISTS `rolle` (
    `id` INTEGER PRIMARY KEY AUTOINCREMENT,
    `rolle` TEXT NOT NULL,
    `bruker_id` INTEGER NOT NULL,
    FOREIGN KEY(`bruker_id`) REFERENCES `users`(`id`)
    );
);