# Travels-of-Marco-Polo

This project follows TEI 5 Guidelines for XML based text-encoding to create a digital version of an extract from the book: *"The Travels of Marco Polo"*. This encoding format provides semantic elements which allows a formal (and detailed) definition and description of a large variety of literary and linguistic texts. The result is an enhanced digital version of the encoded text.

------------
###### Created on: 04/2018 / Live version: https://lukasd2.github.io/Travels-of-Marco-Polo/progetto.html
------------
### Technologies/features:

- XML
- XSLT
- Javascript, HTML, CSS
- amMaps (https://www.amcharts.com/javascript-maps/)
- TEI5 Guidelines (http://www.tei-c.org/guidelines/p5/)

#### Description: 

The first thing to do for this project was the definition of a suitable XML schema, using **TEI Roma** (http://http://roma.tei-c.org/), custom template generator. 

The second step consisted in encoding plain-text with the right semantic elements and attributes defined in the generated schema (documentazioneProgetto.html) in order to obtain a hierarchical XML structure.

At this point, after a successful validation of the schema structure, it was possible to transform the document to HTML using **XSLT (Extensible Stylesheet Language Transformations)**. The XSL recursive structure allowed, not only to generate HTML structure but also to enrich text with new functionalities: lists of all people, provinces and cities encountered in the encoded text and a complete reference list situated at the bottom of each "page".

Therefore, generated mark-up, simplified the process of adding new features like the integration of interactive map to follow alongside the progress made by the protagonist (by clicking on any of cities name in bold).

### Challenges/issues: 

Creating digital editions from XML encoded texts, initially turned out to be, from my point of view, a tedious task. Hovewer, adopting  a sistematic approach, a pipeline: starting from the study of TEI documentation (necessary for choosing suitable encoding of elements), XML-encoding (using some regular expressions to decrease the amount of manual encoding) and XSLT (to generate ready to use identifiers of classes, ids etc.) accelerated the development process. It could be interesting to further decrease the amount of manual work during the encoding process, perhaps by applying Natural Language Processing methods (with existing tools like python NLTK or Cython-spaCy) 

A well structured, complex example of TEI-XML based visualization technology is shown within the EVT project, "Edition Visualization Technology" (http://evt.labcd.unipi.it/).
