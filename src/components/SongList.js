import React, { Component } from 'react'
import { connect } from 'react-redux'

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song, index) => {
            return (
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>

                </div>
            )
        })
    }
    render() {
        console.log(this.props)
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}
//mapStateToProps -> We are going to take state object,essentially all data that is inside our redux store and make calculation/computation and eventually show as props
const mapStateToProps = (state) => { // We can call it anything we want but as convention we will name is mapStateToProps
    // console.log(state);
    // return state;
    return {
        songs: state.songs
    }
}
export default connect(mapStateToProps)(SongList);

//connect function is returning a function