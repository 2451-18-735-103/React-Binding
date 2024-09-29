import logo from './logo.svg';
import './App.css';
import ComponentToView from './components/ComponentToView';
import ViewToComponent from './components/ViewToComponent';
import EventBindingOne from './components/EventBindingOne';
import EventBindingTwo from './components/EventBindingTwo';

function App() {
  return (
    <div className="App">
      <ComponentToView />
      <ViewToComponent />
      <EventBindingOne/>
      <EventBindingTwo/>
    </div>
  );
}

export default App;
