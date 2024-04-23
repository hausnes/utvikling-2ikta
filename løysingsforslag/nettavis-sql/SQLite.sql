-- SQLite
CREATE TABLE artikkel(
  id INTEGER NOT NULL,
  tittel TEXT,
  tekst TEXT,
  opprettet DATETIME,
  endret DATETIME,
  visningar INTEGER,
  PRIMARY KEY(id)
);

CREATE TABLE journalist(
  id INTEGER NOT NULL,
  fornavn TEXT,
  etternavn TEXT,
  postadresse_postnr INTEGER NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT postadresse_journalist
    FOREIGN KEY (postadresse_postnr) REFERENCES postadresse (postnr)
);

CREATE TABLE journalist_paa_sak(
  id INTEGER NOT NULL,
  artikkel_id INTEGER NOT NULL,
  journalist_id INTEGER NOT NULL,
  PRIMARY KEY(id),
  CONSTRAINT artikkel_journalist_paa_sak
    FOREIGN KEY (artikkel_id) REFERENCES artikkel (id),
  CONSTRAINT journalist_journalist_paa_sak
    FOREIGN KEY (journalist_id) REFERENCES journalist (id)
);

CREATE TABLE postadresse
  (postnr INTEGER NOT NULL, poststed TEXT, PRIMARY KEY(postnr));