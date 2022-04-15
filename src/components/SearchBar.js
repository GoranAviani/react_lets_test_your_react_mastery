import React from 'react';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {'term': ''}
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.term)
        this.props.searchItem(this.state.term)

    }

    onInputChange = (e) => {
        this.setState({term: e.target.value})
        console.log(this.state.term)
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video search</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;