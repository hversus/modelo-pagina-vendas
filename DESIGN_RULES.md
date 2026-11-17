# 🛡️ REGRAS DE PROTEÇÃO DA PÁGINA DE VENDAS - BASE DE CONHECIMENTO

Este documento define as regras obrigatórias para qualquer modificação na landing page de vendas dos 150 Salmos. **TODAS as instruções abaixo são de cumprimento OBRIGATÓRIO** e devem ser consultadas antes de qualquer alteração no projeto.

---

## 📋 ÍNDICE

1. [Estrutura de Blocos Protegidos](#estrutura-de-blocos-protegidos)
2. [Níveis de Risco das Alterações](#níveis-de-risco-das-alterações)
3. [Regras de Confirmação Obrigatória](#regras-de-confirmação-obrigatória)
4. [O Que Pode Ser Alterado Sem Perguntar](#o-que-pode-ser-alterado-sem-perguntar)
5. [O Que NUNCA Pode Ser Alterado Sem Confirmação](#o-que-nunca-pode-ser-alterado-sem-confirmação)
6. [Protocolo de Alterações Estruturais](#protocolo-de-alterações-estruturais)
7. [Checklist de Segurança](#checklist-de-segurança)

---

## 📦 ESTRUTURA DE BLOCOS PROTEGIDOS

A página de vendas possui **12 blocos fixos** em ordem específica. Esta estrutura é **SAGRADA** e não pode ser alterada sem confirmação explícita do usuário.

### Ordem dos Blocos (NÃO ALTERAR):

| # | Bloco | Componente | Status |
|---|-------|------------|--------|
| 1 | Banner Superior | TopBanner (se existir) | 🔒 Protegido |
| 2 | Hero Section | HeroSection.tsx | 🔒 Protegido |
| 3 | Carrossel de Materiais | DemoCarousel.tsx | 🔒 Protegido |
| 4 | Material Único (Benefits) | BenefitsSection.tsx | 🔒 Protegido |
| 5 | Exemplo do Material | MaterialExampleSection.tsx | 🔒 Protegido |
| 6 | Ideal Para Você | IdealForYouSection.tsx | 🔒 Protegido |
| 7 | O Que Você Vai Receber | WhatYouGetSection.tsx | 🔒 Protegido |
| 8 | Seção CTA (Entenda Hoje) | UnderstandTodaySection.tsx | 🔒 Protegido |
| 9 | 8 Bônus Exclusivos | BonusSection.tsx | 🔒 Protegido |
| 10 | Seção de Preços | PricingSection.tsx | 🔒 Protegido |
| 11 | FAQ | FAQSection.tsx | 🔒 Protegido |
| 12 | Footer | Footer.tsx | 🔒 Protegido |

---

## 🚦 NÍVEIS DE RISCO DAS ALTERAÇÕES

### 🟢 RISCO VERDE - Alterações Permitidas (Sem Confirmação)

Estas alterações podem ser feitas livremente sem perguntar ao usuário:

- ✅ Correção de bugs visuais
- ✅ Ajuste de espaçamentos (padding, margin, gap)
- ✅ Ajuste de tamanhos de fonte (font-size)
- ✅ Correção de cores para usar tokens do design system
- ✅ Ajuste de responsividade (mobile/tablet/desktop)
- ✅ Correção de alinhamentos
- ✅ Otimização de performance (lazy loading, etc.)
- ✅ Ajuste de sombras e bordas
- ✅ Correção de erros de digitação no código
- ✅ Refatoração interna sem mudança visual

### 🟡 RISCO AMARELO - Alterações com Confirmação Simples

Estas alterações requerem uma pergunta rápida de confirmação:

- ⚠️ Mudança de textos/copy (títulos, descrições, CTAs)
- ⚠️ Troca de imagens/mockups
- ⚠️ Alteração de links de pagamento
- ⚠️ Mudança de preços exibidos
- ⚠️ Alteração de efeitos visuais (glow, gradientes, animações)
- ⚠️ Mudança de família tipográfica
- ⚠️ Alteração de ícones
- ⚠️ Modificação de badges e labels

**Formato de Confirmação Amarela:**
```
⚠️ CONFIRMAÇÃO NECESSÁRIA:
Você quer alterar [DESCRIÇÃO DA MUDANÇA]?
- De: [valor atual]
- Para: [novo valor]

Confirma essa alteração?
```

### 🔴 RISCO VERMELHO - Alterações com Confirmação Obrigatória Detalhada

Estas alterações são CRÍTICAS e requerem confirmação explícita e detalhada:

- 🚫 Adicionar novos blocos/seções
- 🚫 Remover blocos/seções existentes
- 🚫 Alterar a ordem dos blocos
- 🚫 Mover elementos entre blocos
- 🚫 Mudar a estrutura interna de um bloco (layout, grid, flex direction)
- 🚫 Alterar o fluxo da página
- 🚫 Remover CTAs ou botões de compra
- 🚫 Alterar a paleta de cores principal
- 🚫 Mudar a fonte principal (Montserrat)
- 🚫 Remover elementos de conversão (badges, urgência, escassez)
- 🚫 Alterar a estrutura de preços/planos
- 🚫 Remover garantias ou selos de segurança

---

## ✋ REGRAS DE CONFIRMAÇÃO OBRIGATÓRIA

### Para Alterações de RISCO VERMELHO, SEMPRE seguir este protocolo:

#### 1. ANÁLISE PRÉVIA
Antes de qualquer modificação estrutural:
- Consultar este documento (DESIGN_RULES.md)
- Verificar qual bloco será afetado
- Identificar o nível de risco
- Documentar o estado atual

#### 2. APRESENTAÇÃO DA MUDANÇA
Apresentar ao usuário de forma clara:

```
🔴 ALTERAÇÃO ESTRUTURAL DETECTADA

📍 Bloco afetado: [Nome do Bloco]
📁 Arquivo: [nome-do-arquivo.tsx]

📝 DESCRIÇÃO DA MUDANÇA:
[Explicar detalhadamente o que será alterado]

⚠️ IMPACTOS:
- [Impacto 1]
- [Impacto 2]
- [Impacto 3]

❓ PERGUNTAS DE CONFIRMAÇÃO:
1. Você realmente deseja [ação específica]?
2. Você entende que isso irá [consequência]?
3. Você confirma essa alteração estrutural?

Por favor, responda SIM para cada pergunta para prosseguir.
```

#### 3. AGUARDAR CONFIRMAÇÃO EXPLÍCITA
- NÃO prosseguir sem resposta clara do usuário
- Se o usuário responder de forma ambígua, pedir esclarecimento
- Registrar a confirmação antes de executar

#### 4. DOCUMENTAR A ALTERAÇÃO
Após a alteração, informar:
- O que foi alterado
- Como reverter se necessário
- Estado atual da estrutura

---

## ✅ O QUE PODE SER ALTERADO SEM PERGUNTAR

### Design Visual (Ajustes Finos)
```
✅ Espaçamentos (padding, margin, gap)
✅ Tamanhos de fonte dentro da escala definida
✅ Ajustes de line-height e letter-spacing
✅ Correção de alinhamentos (text-align, justify, items-center)
✅ Ajustes de border-radius
✅ Intensidade de sombras (box-shadow)
✅ Opacidade de elementos
✅ Breakpoints de responsividade
✅ Ordem de elementos DENTRO do mesmo bloco (se não afetar conversão)
```

### Código e Performance
```
✅ Refatoração de código sem mudança visual
✅ Otimização de imports
✅ Lazy loading de imagens
✅ Correção de erros TypeScript
✅ Melhoria de acessibilidade (alt, aria-labels)
✅ Semantic HTML
✅ Organização de arquivos
```

### Correções de Bugs
```
✅ Elementos não aparecendo corretamente
✅ Estilos quebrados
✅ Responsividade quebrada
✅ Animações não funcionando
✅ Links quebrados (com mesmo destino)
```

---

## 🚫 O QUE NUNCA PODE SER ALTERADO SEM CONFIRMAÇÃO

### Estrutura da Página
```
🚫 Ordem dos 12 blocos
🚫 Quantidade de blocos
🚫 Hierarquia de componentes principais
🚫 Fluxo de leitura da página
🚫 Posicionamento de CTAs
```

### Elementos de Conversão
```
🚫 Botões de compra (CTAs)
🚫 Badges de urgência/escassez
🚫 Preços e valores
🚫 Garantias
🚫 Depoimentos/Provas sociais
🚫 Selos de segurança
🚫 Formas de pagamento
```

### Identidade Visual Core
```
🚫 Paleta de cores principal (tokens HSL)
🚫 Fonte principal (Montserrat)
🚫 Estilo dos CTAs (lime-green com glow 3D)
🚫 Padrão de cards
🚫 Estilo de badges
```

### Conteúdo Estratégico
```
🚫 Headlines principais
🚫 Proposta de valor
🚫 Benefícios listados
🚫 Descrição de bônus
🚫 Copy de vendas
🚫 Títulos de seção
```

---

## 📋 PROTOCOLO DE ALTERAÇÕES ESTRUTURAIS

### Cenário 1: Usuário pede para ADICIONAR um bloco

```
PROTOCOLO:
1. Perguntar ONDE o bloco deve ser inserido
2. Confirmar a posição exata (após qual bloco existente)
3. Descrever como ficará a nova estrutura
4. Pedir confirmação antes de implementar

EXEMPLO DE RESPOSTA:
"Você quer adicionar um bloco de Prova Social. 
Onde você quer que ele apareça?

Opções:
A) Após o Hero (Bloco 2)
B) Antes do Pricing (Bloco 9)
C) Outro local (especifique)

Após sua escolha, vou confirmar a nova estrutura antes de implementar."
```

### Cenário 2: Usuário pede para REMOVER um bloco

```
PROTOCOLO:
1. Confirmar qual bloco será removido
2. Explicar as consequências
3. Perguntar se quer apenas ocultar ou remover permanentemente
4. Pedir confirmação explícita

EXEMPLO DE RESPOSTA:
"🔴 REMOÇÃO DE BLOCO SOLICITADA

Você quer remover o bloco FAQ (Bloco 11).

⚠️ CONSEQUÊNCIAS:
- O bloco será completamente removido
- Os usuários não terão acesso às perguntas frequentes
- Pode afetar a decisão de compra

❓ OPÇÕES:
1. Remover permanentemente
2. Apenas ocultar (manter código, não exibir)
3. Cancelar

Qual opção você escolhe?"
```

### Cenário 3: Usuário pede para REORDENAR blocos

```
PROTOCOLO:
1. Confirmar a nova ordem desejada
2. Mostrar comparativo (antes vs depois)
3. Alertar sobre impactos no fluxo de vendas
4. Pedir confirmação

EXEMPLO DE RESPOSTA:
"🔴 REORDENAÇÃO DE BLOCOS SOLICITADA

ORDEM ATUAL:
1. Hero → 2. Carrossel → 3. Benefits → 4. Material...

NOVA ORDEM PROPOSTA:
1. Hero → 2. Benefits → 3. Carrossel → 4. Material...

⚠️ AVISO: Alterar a ordem pode afetar o fluxo de persuasão da página.

Você confirma essa reordenação?"
```

### Cenário 4: Usuário pede mudança de EFEITOS/FONTES

```
PROTOCOLO:
1. Identificar o efeito/fonte atual
2. Mostrar o que será alterado
3. Perguntar se aplica globalmente ou localmente
4. Pedir confirmação

EXEMPLO DE RESPOSTA:
"⚠️ ALTERAÇÃO DE EFEITO VISUAL

Você quer alterar o efeito 3D dos botões CTA.

ATUAL:
- Sombra: 0 8px 0 (lime-shadow)
- Glow: 0 0 32px (lime)

PROPOSTO:
- [descrever novo efeito]

Aplicar em:
A) Todos os CTAs da página
B) Apenas este CTA específico

Confirma a alteração?"
```

---

## ✔️ CHECKLIST DE SEGURANÇA

Antes de QUALQUER alteração, verificar:

```
□ A alteração afeta a ESTRUTURA de blocos?
  → Se SIM: Pedir confirmação detalhada

□ A alteração remove algum ELEMENTO DE CONVERSÃO?
  → Se SIM: Pedir confirmação detalhada

□ A alteração muda FONTES ou CORES principais?
  → Se SIM: Pedir confirmação

□ A alteração afeta o FLUXO de leitura?
  → Se SIM: Pedir confirmação

□ A alteração é apenas VISUAL/RESPONSIVA?
  → Se SIM: Pode prosseguir

□ A alteração é CORREÇÃO DE BUG?
  → Se SIM: Pode prosseguir

□ Consultei este documento antes de agir?
  → SEMPRE deve ser SIM
```

---

## 🎨 ESPECIFICAÇÕES VISUAIS PROTEGIDAS

### Paleta de Cores (NÃO ALTERAR SEM CONFIRMAÇÃO)
```css
--lp-lime: 84 100% 59%;      /* #ADFF2F - CTAs */
--lp-black: 0 0% 0%;         /* #000000 - Textos */
--lp-white: 0 0% 100%;       /* #FFFFFF - Fundos */
--lp-dark: 0 0% 16%;         /* #2A2A2A - Seções escuras */
--lp-danger: 0 100% 50%;     /* #FF0000 - Urgência */
--lp-check: 120 100% 33%;    /* #00AA00 - Checks */
--lp-light: 0 0% 95%;        /* #F2F2F2 - Fundos claros */
```

### Tipografia (NÃO ALTERAR SEM CONFIRMAÇÃO)
```
Fonte Principal: Montserrat
Fallbacks: Inter, Lato, system-ui, sans-serif

Hierarquia:
- Títulos: 800 (ExtraBold)
- Subtítulos: 700 (Bold)
- Corpo: 400-500 (Regular/Medium)
- CTAs: 700 (Bold) + Uppercase
```

### Estilo de CTAs (NÃO ALTERAR SEM CONFIRMAÇÃO)
```
- Background: lime (#ADFF2F)
- Formato: Pill (border-radius: 50px)
- Efeito 3D: box-shadow com lime-shadow
- Glow: 0 0 32px lime/45%
- Texto: Preto, Bold, Uppercase
- Ícone: Seta para direita (→)
```

---

## 📝 FORMATO DE REGISTRO DE ALTERAÇÕES

Sempre que uma alteração VERMELHA for aprovada, registrar:

```
DATA: [data]
BLOCO AFETADO: [nome]
TIPO DE ALTERAÇÃO: [adição/remoção/reordenação/estrutural]
DESCRIÇÃO: [o que foi alterado]
CONFIRMAÇÃO DO USUÁRIO: [sim/não]
COMO REVERTER: [instruções]
```

---

## ⚠️ RESUMO EXECUTIVO

1. **NUNCA** alterar estrutura de blocos sem confirmação
2. **NUNCA** remover elementos de conversão sem confirmação
3. **NUNCA** mudar fontes/cores principais sem confirmação
4. **SEMPRE** consultar este documento antes de mudanças estruturais
5. **SEMPRE** perguntar e aguardar confirmação explícita
6. **SEMPRE** documentar alterações críticas
7. **PODE** ajustar design visual (espaçamentos, responsividade) livremente
8. **PODE** corrigir bugs sem perguntar
9. **PODE** otimizar performance sem perguntar

---

*Este documento é a fonte de verdade para todas as decisões de design e estrutura da página de vendas.*
