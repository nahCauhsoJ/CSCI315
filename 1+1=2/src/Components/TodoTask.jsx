import React, { useState } from 'react';



class TodoTask extends React.Component {
  constructor (props){
    super(props);

    this.state = {
      completed: false,
	  removed: false
    };

    this.toggleTask = this.toggleTask.bind(this);
	this.removeTask = this.removeTask.bind(this);
  }
  toggleTask (e) {
    this.setState({completed: !this.state.completed});
  }
  
  removeTask (e) {
    this.setState({removed: true});
  }
  
  render (){
    return (
		<div>
			{ this.state.removed ? "":
				<ul className="task_box">
					<li>
						{this.state.completed ? <strike className="task_txt">{this.props.txt}</strike> : <label className="task_txt">{this.props.txt}</label>}
					</li>
					<li>
						<input type="checkbox" onClick={this.toggleTask} />
						<input type="button" className="task_btn" value="DELEEEEEETE" onClick={this.removeTask} />
					</li>
				</ul>
			}
		</div>
    );
  }
}



export default TodoTask;