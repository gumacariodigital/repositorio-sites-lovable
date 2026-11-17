# Viagem sem Caos

Guia editorial de viagem: um site de página única que leva o leitor por quatro
capítulos — **Planejar**, **Mala**, **Documentos** e **Aeroporto** — e termina na
inscrição da newsletter.

## Onde está o quê

| Parte | Arquivo |
| --- | --- |
| Página principal | `src/routes/index.tsx` |
| Cores, fontes e estilos | `src/styles.css` |
| Imagens | `src/assets/` |
| Pasta de referência do site | `site/README.md` |

O site precisa ficar na raiz do repositório: é ali que a plataforma o executa.

## Rodar localmente

```sh
git clone https://github.com/gumacariodigital/repositorio-sites-lovable.git
cd repositorio-sites-lovable
npm install
npm run dev
```

## Pilha

- TanStack Start (React 19 + TypeScript)
- Vite
- Tailwind CSS v4

## Observações

- A inscrição da newsletter mostra uma confirmação na tela; nenhum e-mail é
  salvo nem enviado ainda.
- A foto do capítulo Aeroporto é um espaço reservado ("Foto em breve").
- As ferramentas de criação de sites ficam no repositório separado
  [website-creation-toolkit](https://github.com/gumacariodigital/website-creation-toolkit).
