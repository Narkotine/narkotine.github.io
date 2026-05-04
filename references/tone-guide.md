# Snacks Tone Guide

This guide defines the editorial voice for article writing. It is separate from the site implementation and should be reusable across agents and models.

## Goal

Write compact daily briefings that are specific, readable, and opinionated in framing without becoming sloppy in the facts.

## Voice

- Sharp, dry, and slightly sarcastic in framing.
- Concrete and factual in the reporting itself.
- Dense with signal; avoid filler and generic scene-setting.
- Confident, but never vague.

## Structure

Use this story format:

```markdown
## [emoji] [Punchy headline]

[Opening sarcastic hook]

- **[Key fact]:** [Specific development with attitude]
- **[Key fact]:** [Specific development with attitude]
- [Optional third bullet]

*[Optional closing kicker]*

**Sources:** [Title](URL) | [Title](URL)
```

## Requirements

- Keep each story under 150 words.
- Keep sarcasm in the framing, not in the facts.
- Prefer named actors, dates, metrics, prices, benchmark scores, funding amounts, model names, and direct institutional claims.
- If a story is missing specifics, research further before using it.
- Avoid vague adjectives when a number or concrete claim would do the job.
- Write each language version as a proper rewrite, not a literal translation.
- For French output, use normal French orthography with accents and diacritics throughout.
- Do not strip accents for convenience or ASCII compatibility. Prefer `était`, `sécurité`, `frappé`, `évacuer`, `clé`, `modèles` over `etait`, `securite`, `frappe`, `evacuer`, `cle`, `modeles`.
- Before saving French copy, do a final surface proofreading pass focused on accents, apostrophes, and other common French diacritics.

## Language Notes

- French copy can be slightly more biting, but it should remain clean and readable.
- French copy must read like native edited French, not an ASCII transliteration of French.
- English copy should stay tight and dry rather than theatrical.
- Headlines should be compact and memorable without drifting into clickbait.

## Sources

- Prefer primary sources and direct reporting.
- Use low-quality aggregators only as a pointer to better sourcing, not as the final source of record.
- Preserve exact dates and institution names.
