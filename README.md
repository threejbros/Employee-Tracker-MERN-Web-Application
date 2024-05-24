In this lab your job will be to add a confirmation modal to the delete button in the table. Up to this point, you've used the React Bootstrap Button component to add a red button to each row in the table. When the button is clicked, the employee for that row is deleted. However, there is no feedback / confirmation given to the user that this operation is about to take place. What if the user clicked this button by accident? A delete confirmation modal when the button is clicked that gives the user the option to proceed with the delete operation or cancel the delete operation is ideal here. You will use the React Bootstrap Modal component here to complete this lab. 

Clicking the 'Yes' button will proceed with deleting the employee and the Modal will hide. Clicking the 'Cancel' button will not delete the employee and the Modal will hide.

General Notes Regarding this Lab

![image](https://github.com/threejbros/CS648_M16Lab1_JonathanLee/assets/25696463/758d199e-1aa6-49ad-a0b2-c30402c0d7a8)


1. All of your work will be completed within the EmployeeList.jsx file and specifically within the EmployeeRow component.
2. The EmployeeRow component is currently a stateless (function) component. It will need to be converted to a class component so that you can work with state.
3. You'll need to add a constructor function, super function within the constructor, and then set up a state object to store the visibility of the Modal.
4. When we demoed the Modal last we used two functions to set the visibility of the Modal handleShowModal and handleHideModal. You will only use one function here called toggleModal. You can use this syntax here to toggle the visibility back and forth between true and false: !this.state.modalVisible.
5. Don't forget to bind toggleModal to the constructor.
6. The actual Modal can appear within the <td> tag...the same <td> tag that contains the Delete button.
7. Remember, you Modal footer will now have two buttons. One that cancels out of the Modal and hides it and one that proceeds with the deletion and also hides the Modal.
