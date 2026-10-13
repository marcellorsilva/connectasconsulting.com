# Site da Connectas no ar (connectasconsulting.com)

O site é publicado no **Netlify** (plano gratuito), que lê os arquivos prontos do repositório público
**github.com/marcellorsilva/connectasconsulting.com**. O DNS do domínio continua no Wix.

## Publicar uma atualização

```bash
cd ~/Documents/connectas-website && npm run publish:site
```

O comando gera o site, envia para o GitHub e o Netlify atualiza sozinho em cerca de um minuto.

## DNS (Wix → Domains → connectasconsulting.com → Manage DNS records)

| Tipo | Nome | Valor |
|---|---|---|
| A | connectasconsulting.com | 75.2.60.5 |
| CNAME | www | mellow-croquembouche-0224d5.netlify.app |

Não mexer em MX e TXT (e-mail do Google). O cadeado HTTPS é emitido pelo Netlify (Let's Encrypt).
No Netlify, o selo "Powered by Netlify" está desligado (Project configuration → General).

## Wix Headless (não usado)

O projeto continua com a integração do Wix (`npx wix build` / `npx wix release`), mas a hospedagem no Wix
deu erro no domínio. Os projetos "Connectas" e "Connectas Consulting" no Wix podem ser apagados.
