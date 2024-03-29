---
weight: 3
---
## Moiré pattern

### Problema a resolver
Implementar un patrón de Moiré.

### Introducción
<p style="text-align: justify;">
Un patrón de moiré es un patrón de interferencia visual que se produce cuando dos patrones de líneas se superponen en un ángulo específico. El patrón resultante puede ser una serie de bandas oscuras y claras o un patrón de ondulaciones que parecen moverse o vibrar, incluso cuando las líneas individuales están estáticas.
</p>
<p style="text-align: justify;">
El patrón de moiré se produce porque las líneas de los dos patrones se superponen y crean zonas de mayor o menor densidad de líneas en diferentes lugares de la superposición. Dependiendo del ángulo en que se superpongan las líneas, las zonas de mayor o menor densidad se superpondrán o se cancelarán, lo que da lugar al patrón visual de interferencia.
</p>

<p style="text-align: justify;">
El patrón de moiré se puede encontrar en una amplia variedad de situaciones, desde la superposición de patrones de tejido en ropa hasta la superposición de patrones de medios impresos, como revistas y libros. A menudo se considera un defecto no deseado en la impresión, pero también se puede utilizar creativamente en el diseño gráfico y la moda para crear patrones visuales interesantes y atractivos.
</p>

### Antecedentes y trabajo previo

<p style="text-align: justify;">
Antes de la era digital, el patrón de Moiré se consideraba un problema en la industria de la impresión, ya que la superposición de dos patrones de trama en la impresión podía causar un efecto no deseado en la imagen impresa. Los fotógrafos también han utilizado el efecto para crear texturas y patrones interesantes en las imágenes.
</p>

<p style="text-align: justify;">
En el mundo digital, el patrón de Moiré sigue siendo utilizado en la impresión y la fotografía, pero también se ha convertido en una herramienta popular para crear efectos visuales interesantes y animaciones en la pantalla.
</p>

<p style="text-align: justify;">
En la animación, el patrón de Moiré se utiliza a menudo para crear ilusiones de movimiento y textura en los personajes animados. También se ha utilizado en la industria del cine para crear efectos especiales en películas.
</p>

### Solución

{{< details title="p5-iframe markdown" open=false >}}
{{< highlight html >}}
{{</* p5-iframe sketch="/showcase/sketches/moire.js" width="625" height="625" */>}}
{{< /highlight >}}
{{< /details >}}


{{< p5-iframe sketch="/showcase/sketches/moire.js" width="625" height="625" >}}

### Implementación

<p style="text-align: justify;">
Se implementó un patrón de Moiré mediante el uso de dos rejillas idénticas, la primera se mantiene estática en un punto fijo mientras que la segunda gira con respecto a un eje con una velocidad constante de tal forma que los ángulos entre las dos rejillas varian permitinedo formar los patrones que se buscan.
</p>

### Código
{{< highlight js >}}
new p5((p)=>{

    let rotation = 0;
    p.preload = function() {
      mask = p.loadImage('/showcase/sketches/o33t.png'); 
      mask2 = p.loadImage('/showcase/sketches/o33t.png');
    }
  
    p.setup = function() {
      p.createCanvas(600, 600);
      mask.resize(500,500);
      mask2.resize(500,500);
      p.imageMode(p.CENTER);
      p.angleMode(p.DEGREES);
    }
  
    p.draw = function()  {
      p.background(255);
      p.image(mask2,p.width / 2,p.height / 2);
      p.translate(p.width / 2, p.height / 2);
      p.rotate(rotation);
      p.image(mask, 0, 0);
      rotation +=1;
      
      
    }
  },"moire")

{{< /highlight >}}


### Conclusiones

<p style="text-align: justify;">
En conclusión, el patrón de moiré es un fenómeno visual que ocurre cuando dos patrones de líneas se superponen en un ángulo específico, creando un patrón de interferencia visual. Aunque a menudo se considera un defecto no deseado en la impresión, también puede ser utilizado creativamente en el diseño gráfico y la moda para crear patrones visuales interesantes y atractivos.
El patrón de moiré demuestra cómo nuestro cerebro puede ser engañado por patrones visuales y cómo el uso creativo de patrones y superposiciones puede generar efectos visuales únicos y atractivos. 
</p>

### Trabajo futuro

<p style="text-align: justify;">v
En la animación, se espera que el patrón de Moiré siga siendo utilizado para crear ilusiones de movimiento y textura en los personajes animados. También puede ser utilizado en la creación de efectos especiales en el cine y la televisión.
</p>
<p style="text-align: justify;">
En el diseño gráfico y la industria digital, se espera que el patrón de Moiré siga siendo utilizado para crear efectos visuales interesantes y animaciones en la pantalla. También se espera que los diseñadores y desarrolladores de software sigan experimentando con nuevas formas de utilizar el patrón de Moiré en sus creaciones.
</p>
