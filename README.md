**Answering the questions** 
============================

1.  **_What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?_**
2.  **_How do you create and insert a new element into the DOM?_**
3.  **_What is Event Bubbling and how does it work?_**
4.  **_What is Event Delegation in JavaScript? Why is it useful?_**
5.  **_What is the difference between preventDefault() and stopPropagation() methods?_**

**1\. Answer**

*   getElementById: it collect single element by id 
*   getElementsByClassName: it collect HTMLCollection element by class
*   querySelector: it collect first element by CSS selector
*   querySelectorAll: it collect all element NodeList by CSS selector

  

**2\. Answer**

for create the elements use document.createElement() and insert use parents.appendChild(child)

  

**3\. Answer**

Event bubbling is a process in the DOM where an event call on an element first executes it self and then executes its parent event then its grandparent etc.

for example: i have 3 nested div top,middle,inner and i place a onclick() on all div. now if i click inner div then 1st execute inner then middle and top div it call Event bubbling.

  

**4\. Answer**

Event Delegation is a process in the DOM where a parent event call and terget there chaild event.

for example: in a ul has multiple li. and i want to add there more li and change different style on those li. i can do it with Event Delegation. just add a event in ul and terget all li under ul then it's work properly.

  

**5\. Answer**

*   preventDefault(): it stop default behavior on the event
*   stopPropagation():  it stop Event bubbling up on the parent
