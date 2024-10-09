function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
    }
    const showAlert = () => {  
        alert('This is RESPONSIVE webpage check later');  
      };  

export { showSidebar , hideSidebar ,showAlert};

