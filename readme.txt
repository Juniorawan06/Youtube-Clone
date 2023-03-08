**Extra Markup**

How to add comments to your code
● Global attributes, which are attributes that can be used on
any element, including the class and id attributes
● Elements that are used to group together parts of the page
where no other element is suitable
● How to embed a page within a page using iframes
● How to add information about the web page using the

<meta> element
● Adding characters such as angled brackets and copyright
symbols

**DOCTYPES**
Because there have been
several versions of HTML, each
web page should begin with a
DOCTYPE declaration to tell a
browser which version of HTML
the page is using (although
browsers usually display the
page even if it is not included).
We will therefore be including
one in each example for the rest
of the book.

**comments**

<!-- start of introduction -->
<h1>Current Exhibitions</h1>
<h2>Olafur Eliasson</h2>
<!-- end of introduction -->
<!-- start of main text -->

**ID Attribute**

Every HTML element can carry
the id attribute. It is used to
uniquely identify that element
from other elements on the
page. Its value should start with
a letter or an underscore (not a
number or any other character).
It is important that no two
elements on the same page
have the same value for their id
attributes (otherwise the value is
no longer unique).

<p id="pullquote">Every time I view the sea I feel
 a calming sense of security, as if visiting my
 ancestral home; I embark on a voyage of seeing.
</p>

**Class Attribute**

<p class="important">For a one-year period from
 November 2010, the Marugame Genichiro-Inokuma
 Museum of Contemporary Art (MIMOCA) will host a
 cycle of four Hiroshi Sugimoto exhibitions.</p>

**Block and Inline Elements**
block elements took whole size, and never let anyone comes by their side.
inline elements took just the content size init, and let anyone comes by their side.

**div**
container to wrap elements to in a group

 <div></div> is a block element.

**span**
container to wrap elements to in a group
<span></span> is an inline element.

**iframes**
An iframe is like a little window
that has been cut into your
page — and in that window you
can see another page. The term
iframe is an abbreviation of inline
frame.

<iframe
width="450"
height="350"
src="http://maps.google.co.uk/maps?q=moma+new+york
&amp;output=embed">
</iframe>

**Escape Characters**
There are some characters that are used in
and reserved by HTML code. (For example, the
left and right angled brackets.)

Less-than sign
&lt;
&#60;
Greater-than sign
&gt;
&amp;
Ampersand
&amp;
&#38;
Quotation mark
&quot;
&#34;
Cent sign
&cent;
&#162;
Pound sign
&pound;
&#163;
Yen sign
&yen;
&#165;
Euro sign
&euro;
&#8364;
Copyright symbol
&copy;
&#169;
Registered trademark
&reg;
&#174;
Trademark
&trade;
&#8482;
Left single quote
&lsquo;
&#8216;
Right single quote
&rsquo;
&#8217;
Left double quotes
&ldquo;
&#8220;
Right double quotes
&rdquo;
&#8221;
Multiplication sign
&times;
&#215;
Division sign
&divide;
&#247;

**Flash, Vedio &amp; Audio**

<video src="video/puppy.mp4"
 poster="images/puppy.jpg"
 width="400" height="300"
 preload
 controls
 loop>

 <p>A video of a puppy playing in the snow</p>
 </video>

<video poster="images/puppy.jpg" width="400"
 height="320" preload controls loop>

 <source src="video/puppy.mp4" type='video/
 mp4;codecs="avc1.42E01E, mp4a.40.2"' />
 <source src="video/puppy.webm" type='video/
 webm;codecs="vp8, vorbis"' />
 <p>A video of a puppy playing in the snow</p>
 </video>

 <audio src="audio/test-audio.ogg"
 controls autoplay>
 <p>This browser does not support our audio
 format.</p>
 </audio>