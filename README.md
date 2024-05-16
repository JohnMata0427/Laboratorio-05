<h1 align="center">Manipulación del DOM y Asincronismo en JavaScript</h1>

## 🛒 Access HTML Content

#### With Properties

In JavaScript, the manipulation of the DOM occurs through the document object, one of the first methods to access the HTML content through this object is with the use of its properties that return an array of the tags found, for example:

![Access HTML Content](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/54b6d293-7c0e-473c-9321-a00ce4ff1e8f)

Similarly, to access the classes of an HTML tag in JavaScript, the classList or className properties are used, like this:

![Access HTML Content (ClassNames)](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/d0129a9f-403d-4f00-935a-6cf8f5e1f31f)

#### With Methods

- The getElementById() method of the Document interface returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.
- The getElementsByTagName method of Document interface returns an HTMLCollection of elements with the given tag name.
- The getElementsByClassName method of Document interface returns an array-like object of all child elements which have all of the given class name(s).

![getElements](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/a2a694f1-c923-4f48-aba0-5863624bf2c5)

- The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
- The Document method querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors.

![QuerySelectors](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/3458add9-a7ab-46a5-9a1a-8c3a5455ae68)

## 🖌️ Modyfing HTML Content

To change the content or attribute of an HTML element, it is important to first access either the class, the id, or the label.
Once accessed, we proceed as a first step to change the content:

![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/a73094e7-bd77-472c-ad42-fcb4f1f85915)

We will enter the free market and modify the content of the paragraph under “Pay with Mercado Pago”.

![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/cc0b3b82-df61-4689-bbab-528d924743e1)

Now we are going to change its attribute, in this case the image of the text that we just changed

![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/d6e1faa2-8ca9-4c16-a464-5f4aa2507e6c)

What we did was get the first div with the 'info-slide' class, we wrapped it in conditionals to see if it was found, if it was found, then we searched for the 'img.container' div, if that div exists, We access the img tag, if that tag exists then we replace the src attribute.

## 🎨 Modyfing CSS Content

Now we will modify the style of that same image:

![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/00a85a21-3787-4134-b2c2-2bc495d46076)

As with the previous conditional we know that if those classes and labels exist, the only thing we do is enter again and assign styles. In this case we apply height and length to make it smaller

## ➕ Add HTML Elements

Now we will add an HTML Element with the method:

- appendChild(element)
 
![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/a7d430d4-1ad1-4af5-ac5e-b005c078104e)

![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/7cae71cc-df9d-4c1b-83a2-82cf925a6018)

- insertBefore(element)

![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/4164c44c-5e53-4cde-9c0d-552364dff76f)

## ❌ Remove HTML Elements

Now we remove an element, in this case a paragraph, simply using remove method

![image](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/736e616f-bc29-48f8-9de3-869bb5fad8a3)

## 🖱️⌨️ Event Listeners

The click event is triggered when a user clicks on an HTML element. It’s one of the most commonly used events in JavaScript. For example:

![Click](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/353cc6df-643a-4045-a2d5-3a708b5c2bd8)

The mouseenter event is triggered when the mouse pointer enters the HTML element. Unlike mouseover, this event doesn’t bubble and only triggers for the element it’s bound to, not its descendants. The mouseover event is triggered when the mouse pointer is moved onto an element, or onto one of its children. For example:

![MouseEnterOut](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/21517746-10da-4f46-a838-bdaea2e72123)

The input event is triggered every time the value of an input, select, or textarea element changes. This can be due to various actions such as typing in an input box, selecting an option from a dropdown, etc. For example:

![Input](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/ad408614-f2a3-4898-b1de-3f52277fdbf5)

The submit event is triggered when a form is submitted. It’s often used to validate form data before it’s sent to the server. For example:

![Sumbit](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/a9598906-8647-48a0-8149-0ccb73d0ab9d)

The keypress event is triggered when a key is pressed and released. Note that this event is deprecated and the keydown or keyup events should be used instead. For example:

![keypress](https://github.com/JohnMata0427/Laboratorio-05/assets/150484680/95faeda4-982f-440c-850c-3b04952a7d73)

## Asincronismo

En el archivo [asincronismo.js](./asincronismo.js) se detallan los temas:

- Codigo Sincronico vs Codigo Asincronico
- Callback Functions
- Promesas
- Async/Await
- .then().catch()
