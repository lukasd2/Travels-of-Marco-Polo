<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:xs="http://www.w3.org/2001/XMLSchema" 
    xmlns:tei="http://www.tei-c.org/ns/1.0" 
    exclude-result-prefixes="xs" version="2.0" xpath-default-namespace="http://www.tei-c.org/ns/1.0">
   
    <xsl:template match="/">
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link href="styles.css" rel="stylesheet" type="text/css"></link>
                <link rel="stylesheet" href="ammap/ammap.css" type="text/css" media="all" />
                <script src="ammap/ammap.js" type="text/javascript"></script>
                <script src="ammap/maps/js/chinaHigh.js" type="text/javascript"></script>
                <script type="text/javascript" src="main.js"></script>
            </head>
            <body>
                <!-- Visualizzazione debug della mappa
                <div id="info">Click the country to display it's information</div>-->
                <!--Contenitore mappa -->
                <h1 style="display:none;">Marco Polo mappa del viaggi nel territorio dell'attuale Cina </h1>
                <h3 class="title">Mappa dei viaggi di Marco Polo nel territorio dell'attuale Cina</h3>
                <div id="mapdiv" style=""></div>
                <!-- Pulsante per nascondere la mappa -->
                <button style="display:none" title="return to book" id="updatebook">
                    Nascondi la mappa
                </button>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="tei:teiHeader">
        <!-- Presentazione della prima pagina del libro con il titolo, editore ecc. -->
        <div id="front">
            <xsl:apply-templates select="tei:fileDesc/tei:titleStmt"></xsl:apply-templates>
            <xsl:apply-templates select="tei:encodingDesc"></xsl:apply-templates>
            <xsl:apply-templates select="tei:fileDesc/tei:sourceDesc"></xsl:apply-templates>
        </div>
        <!--<xsl:apply-templates></xsl:apply-templates>-->
        <!-- Creo le liste delle persone, provincie e città del testo -->
        <div id="intro">
            <h3>Liste delle persone, delle provincie e delle città che occorrono nel testo:</h3>
            <div class="flex-list">
                <xsl:apply-templates select="tei:fileDesc/tei:sourceDesc/tei:listPerson"></xsl:apply-templates>
                <xsl:apply-templates select="tei:fileDesc/tei:sourceDesc/tei:listPlace"></xsl:apply-templates>
            </div>
        </div>
        
    </xsl:template>
    
    <xsl:template match="tei:titleStmt">
        <div class="author">
            <xsl:value-of select="tei:author"/>
        </div>
        <div class="title">
            <xsl:value-of select="tei:title"/>
        </div>
    </xsl:template>
    
    <xsl:template match="tei:encodingDesc">
        <div>
             <xsl:apply-templates></xsl:apply-templates>                       
        </div>
    </xsl:template>
    
  
    <xsl:template match="tei:sourceDesc">
        <div>
            <xsl:text>A cura di: </xsl:text>
            <xsl:value-of select="tei:bibl/tei:editor"/><br/><br/>
            <xsl:value-of select="tei:bibl/tei:publisher"/>
        </div>
    </xsl:template>
    
    <xsl:template match="tei:listPerson">
        <div class="wrapper">
            <ul>
                <xsl:attribute name="class">
                    <xsl:value-of select="@type"></xsl:value-of>
                </xsl:attribute>
                <h3>Lista delle persone:</h3>
                <!--<b>
                    (
                    <xsl:value-of select="@type"/>
                    )
                </b>-->  
                <xsl:apply-templates/>
            </ul>
            <label id="persCheck" class="control control--checkbox">
                Seleziona tutte le persone nel testo
                <input id="pcheck" type="checkbox"/>
                <div class="control__indicator"></div>
            </label>
        </div>
        
    </xsl:template>
    
    <!-- Genero la lista di tutte le persone presenti nel testo -->
    <xsl:template match="tei:listPerson/tei:person">
        <li>
            <xsl:for-each select="tei:person">
                <xsl:apply-templates/>
            </xsl:for-each>
            <span class="person"><xsl:value-of select="tei:persName"/></span>
        </li>
    </xsl:template>
    
    <xsl:template match="tei:listPlace">
        <div class="wrapper">
            <ul>
                <xsl:attribute name="class">
                    <xsl:value-of select="@type"></xsl:value-of>
                </xsl:attribute> 
                <xsl:choose>
                    <xsl:when test="@type='provinces'">
                        <h3>Lista delle provincie:</h3>
                    </xsl:when>
                    <xsl:otherwise>
                        <h3>Lista delle città:</h3>
                    </xsl:otherwise>
                </xsl:choose>
                <!--<b>
                    (
                    <xsl:value-of select="@type"/>
                    )
                </b> -->     
                <xsl:apply-templates/>
            </ul>
            <!-- creo una checkbox solo per la lista di tutte le provincie" -->
        <xsl:choose>
            <xsl:when test="@type='provinces'">
                <label id="CheckboxProv" class="control control--checkbox">
                    Seleziona tutte le provincie nel testo
                    <input id="provcheck" type="checkbox"/>
                    <div class="control__indicator"></div>
                </label>
            </xsl:when>
        </xsl:choose>
        </div>
    </xsl:template>

    <xsl:template match="tei:listPlace/tei:place">
        <xsl:choose>
            <xsl:when test="../@type='cities'">
                <xsl:for-each select=".">
                    <li>
                        <span class="place"><xsl:value-of select="tei:placeName"/></span>
                    </li>
                </xsl:for-each>
            </xsl:when>
            <xsl:when test="../@type='provinces'">
                <xsl:for-each select=".">
                <li>
                    <span class="province"><xsl:value-of select="tei:placeName"/></span>
                </li>
                </xsl:for-each>
            </xsl:when>
        </xsl:choose>        
    </xsl:template>

    <!--<xsl:template match="tei:listPlace[@type='cities']/tei:place">
        <li>
            <xsl:for-each select="tei:place">
                <xsl:apply-templates/>
            </xsl:for-each>
            <span class="place"><xsl:value-of select="tei:placeName"/></span>
        </li>
    </xsl:template>-->
    
    <xsl:template match="tei:text">
        <!--<div>
            <xsl:apply-templates select="tei:front"/>
        </div>-->
        <div id="book">
            <xsl:apply-templates select="tei:body"/>
        </div>
    </xsl:template>
    
    <xsl:template match="tei:body//tei:head">
        <h3>
            <xsl:apply-templates/>
        </h3>
    </xsl:template>
    
    <xsl:template match="tei:body//tei:div">
        <div class="chapter">
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="tei:p">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
    <xsl:template match="tei:soCalled"> 
        "<xsl:apply-templates></xsl:apply-templates>"
    </xsl:template>
    
    <xsl:template match="tei:pb">
        <span class="page-number">
            <xsl:value-of select="./@n"/>
        </span>
    </xsl:template>
    
    <xsl:template match="tei:lb">
        <br>
            <xsl:apply-templates></xsl:apply-templates>
        </br>
    </xsl:template>
    
    <xsl:template match="tei:placeName/tei:settlement">
        <span class="place">
            <xsl:element name="a">
                <xsl:attribute name="href">
                    <xsl:value-of select="concat('#', tei:placeName)"/>
                    <xsl:apply-templates></xsl:apply-templates>
                </xsl:attribute>
                <xsl:apply-templates></xsl:apply-templates>
            </xsl:element>
        </span>
    </xsl:template>
    
    <xsl:template match="tei:placeName/tei:region">
        <xsl:choose>
            <xsl:when test="@type='province'">
                <span class="province">
                    <xsl:apply-templates/>
                </span>
            </xsl:when>
            <xsl:otherwise>
                <xsl:apply-templates/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>
    
    <xsl:template match="tei:persName">
        <span class="person">
            <xsl:apply-templates></xsl:apply-templates>
        </span>
    </xsl:template>
    
    <xsl:template match="tei:ref">
        <xsl:element name="a">
            <xsl:attribute name="href">
                    <xsl:choose>
                        <xsl:when test="@target">
                            <xsl:value-of select="@target"/>
                        </xsl:when>
                        <xsl:otherwise>
                             <xsl:value-of select="."/>
                        </xsl:otherwise>
                    </xsl:choose>
            </xsl:attribute>
            <xsl:apply-templates/>
        </xsl:element>
    </xsl:template>
    
    <xsl:template match="tei:hi">
        <sup>
            <xsl:apply-templates/>
        </sup>
    </xsl:template>
    
    <xsl:template match="tei:note">
        <xsl:choose>
            <xsl:when test="@type='addition'">
                <xsl:for-each select=".">
                    <span class="addition">[<xsl:value-of select="."/>]</span>
                </xsl:for-each>
            </xsl:when>
            <xsl:otherwise>
                <div class="note">
                    <xsl:attribute name="id">
                        <xsl:value-of select="@xml:id"/>
                    </xsl:attribute>
                    <xsl:apply-templates/>
                </div>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:template>

</xsl:stylesheet>