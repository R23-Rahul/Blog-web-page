This Blog website created using React . This is a basic Blog project which aims to learn and practice about the concept of "UseContext" hook . This is a very usefull hook . This is used in the place of "Porps" in files.

**REASON OF USING "useContext" =>**
let there is many children components of App.js file and the children itself have their components (Making a tree like structure) so if the last node(children) needs some information from parent then we need to pass the props to all its 
children till the goal children do not get the data required , but this can cause performance degrade and also if one node in tree wanted the information from another distanced node's data then it is very difficult and complex to sent and 
recieve the data .so the concept of "useContext" is used.

**STEPS TO FOLLOW =>**
1. first create context() =>context can be created using **createContext()** function (import creatContex from 'react'), then store all useable data in a container 
2. provide context => return the containeer of data
3. consume contex =>using the useContext() hool , we can use the required data [for example we need page in a componenet so we consume/use the data from container ::=> const {page}=useContext(file_name_where_context_created);

here above the code use the same concept where -> the file "AppContext.js" is created and the context is written there , then the data is consume/used in another files.

