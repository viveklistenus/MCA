<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
  <h2>My Movie Collection</h2>
  <table border="1">
    <tr bgcolor="#9acd32">
      <th>Title</th>
      <th>Budget</th>
    </tr>
    <xsl:for-each select="movieList/movie">
    <tr>
      <td><xsl:value-of select="title"/></td>
      <xsl:choose>
        <xsl:when test="budget &gt; 50">
         
<td bgcolor="#ff00ff">

          <xsl:value-of select="budget"/></td>
        </xsl:when>
        <xsl:otherwise>
         <td bgcolor="#ff00ff">

          

          CHEAP </td>
        </xsl:otherwise>
      </xsl:choose>
    </tr>
    </xsl:for-each>
  </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>