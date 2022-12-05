<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
  <html>
  <body>
    <h2>My Movie Collection</h2>
    
    <table border="2">
      <tr bgcolor="#FFFFFF">
        <th>Genre</th>
        <th>Horror</th>
        <th>Action</th>
        <th>Comeedy</th>
      </tr>
      
      <tr bgcolor="#ADD8E6">
       <td>Title</td>
        <td><xsl:value-of select="//*/movie/title"/></td>
        <td><xsl:value-of select="//*/movie[2]/title"/></td>
        <td><xsl:value-of select="//*/movie[3]/title"/></td>
    </tr>
      <tr bgcolor="#ADD8E6">
       <td>Director</td>
        <td><xsl:value-of select="//*/movie/director"/></td>
        <td><xsl:value-of select="//*/movie[2]/director"/></td>
        <td><xsl:value-of select="//*/movie[3]/director"/></td>
      </tr>
    
        <tr bgcolor="#ADD8E6">
       <td id = "hello">Budget</td>
        <td><xsl:value-of select="//*/movie/budget"/></td>
        <td><xsl:value-of select="//*/movie[2]/budget"/></td>
        <td><xsl:value-of select="//*/movie[3]/budget"/></td>
      </tr>
     </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>
