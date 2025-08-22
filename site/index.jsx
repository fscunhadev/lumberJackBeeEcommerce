import React from "react";

const products = [
  {
    name: "Traditional",
    tagline: "Mel & Alecrim",
    img: "/img/traditional.png", // Substitua pelo caminho real do mockup
  },
  {
    name: "Mentolyc",
    tagline: "Melaleuca & Alecrim",
    img: "/img/mentolyc.png",
  },
  {
    name: "Black Honey",
    tagline: "Jojoba, Alecrim & Baunilha",
    img: "/img/blackhoney.png",
  },
  {
    name: "Old School",
    tagline: "Gengibre & Lavanda",
    img: "/img/oldschool.png",
  },
];

export default function LandingPage() {
  return (
    <div style={{ background: "#000", color: "#fff", fontFamily: "sans-serif" }}>
      {/* Hero Banner */}
      <section style={{ textAlign: "center", padding: "80px 20px 60px" }}>
        <img
          src="/imagens/logoAbelha1.png"
          alt="Lumberjack Bee Logo"
          style={{ width: 120, marginBottom: 24 }}
        />
        <h1 style={{ color: "#FFD700", fontSize: 48, margin: 0, fontWeight: 700 }}>
          Lumberjack Bee
        </h1>
        <p style={{ color: "#FFD700", fontSize: 22, margin: "16px 0 32px" }}>
          Pomada Capilar e Para Barba 100% Natural
        </p>
        <button
          style={{
            background: "#FFD700",
            color: "#000",
            border: "none",
            borderRadius: 8,
            padding: "16px 40px",
            fontSize: 20,
            fontWeight: 700,
            cursor: "pointer",
            transition: "all .2s",
          }}
          onMouseOver={e => {
            e.target.style.background = "#000";
            e.target.style.color = "#FFD700";
            e.target.style.border = "2px solid #FFD700";
          }}
          onMouseOut={e => {
            e.target.style.background = "#FFD700";
            e.target.style.color = "#000";
            e.target.style.border = "none";
          }}
        >
          Comprar Agora
        </button>
      </section>

      {/* Compromisso da Marca */}
      <section style={{ display: "flex", justifyContent: "center", gap: 40, padding: "40px 0", background: "#111" }}>
        <div style={{ textAlign: "center", color: "#FFD700" }}>
          <div style={{ fontSize: 36 }}>🐝</div>
          <div style={{ marginTop: 8 }}>Base de cera de abelha.</div>
        </div>
        <div style={{ textAlign: "center", color: "#FFD700" }}>
          <div style={{ fontSize: 36 }}>🍃</div>
          <div style={{ marginTop: 8 }}>100% natural, sem químicos.</div>
        </div>
        <div style={{ textAlign: "center", color: "#FFD700" }}>
          <div style={{ fontSize: 36 }}>💧</div>
          <div style={{ marginTop: 8 }}>Hidrata e fortalece.</div>
        </div>
        <div style={{ textAlign: "center", color: "#FFD700" }}>
          <div style={{ fontSize: 36 }}>🛡️</div>
          <div style={{ marginTop: 8 }}>Protege e não agride a pele.</div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section style={{ padding: "60px 0 40px" }}>
        <h2 style={{ color: "#FFD700", textAlign: "center", fontSize: 32, marginBottom: 32 }}>
          Produtos em Destaque
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 32,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {products.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#181818",
                borderRadius: 16,
                padding: 24,
                textAlign: "center",
                boxShadow: "0 2px 12px #0004",
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{ width: 120, marginBottom: 16 }}
              />
              <h3 style={{ color: "#FFD700", margin: "8px 0 4px" }}>{p.name}</h3>
              <div style={{ color: "#fff", marginBottom: 16 }}>{p.tagline}</div>
              <button
                style={{
                  background: "#FFD700",
                  color: "#000",
                  border: "none",
                  borderRadius: 6,
                  padding: "10px 24px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all .2s",
                }}
                onMouseOver={e => {
                  e.target.style.background = "#000";
                  e.target.style.color = "#FFD700";
                  e.target.style.border = "2px solid #FFD700";
                }}
                onMouseOut={e => {
                  e.target.style.background = "#FFD700";
                  e.target.style.color = "#000";
                  e.target.style.border = "none";
                }}
              >
                Ver Produto
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre a Marca */}
      <section style={{ background: "#000", padding: "60px 0 40px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: 20, marginBottom: 32 }}>
            Inspirados no trabalho artesanal, criamos pomadas naturais à base de cera de abelha, respeitando a tradição old school e trazendo frescor moderno.
          </p>
          <img
            src="/img/mockup-potes-abertos.png"
            alt="Potes abertos"
            style={{ width: 320, borderRadius: 12, boxShadow: "0 2px 12px #0008" }}
          />
        </div>
      </section>
    </div>
  );
}