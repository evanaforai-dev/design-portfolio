# Résumé source

`resume.html` is the source for `public/resume.pdf`. It lives outside
`public/` on purpose, so the html itself is not published alongside the pdf.

The pdf that shipped before this was a 548-byte placeholder reading
"Resume - placeholder", linked from every page on the site.

To regenerate after editing, print the file to pdf at A4 with background
graphics on and "preferCSSPageSize" (the `@page` rule sets the margins):

    Chrome → open resume/resume.html → Print → Save as PDF → A4,
    margins: default, Background graphics: on

Headless equivalent:

    chrome --headless=new --print-to-pdf=public/resume.pdf \
      --no-pdf-header-footer resume/resume.html

Keep it to ONE page, filled. The content box at these margins is 703 x
1039 css px; the current layout lands at 1010, so there is about 29px of
headroom. Adding a bullet means taking one out. The accent is #c0007f, a print-weight version of the
site's magenta: the screen accent sits lighter than ink wants on white paper.
