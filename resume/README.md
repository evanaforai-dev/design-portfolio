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

Keep it to ONE page, filled. At the current margins (16mm top/bottom,
18mm sides) the content box is 658 x 1002 css px and the layout lands at
978, so there is about 24px of headroom. Adding a bullet means taking one
out.

No colour. The document is black on white and links are identified by the
underline, not by a hue: the site's magenta is a screen accent and it
reads as decoration on a printed page.