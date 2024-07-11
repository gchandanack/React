import logo from './logo.svg';
import './App.css';
import Heading1 from './headings/headings';
import Button from './buttons/button';
import CustomImage from './images/img';
import List from './lists/o_list';
import Ipl_List from './component/ipl_list/ipl_list';
const App=() =>{
  return (
<div>
  <Heading1/>
  <Button/>
  <CustomImage/>
  <List></List>
  <Ipl_List></Ipl_List>


  
</div>
  );
};
export default App;