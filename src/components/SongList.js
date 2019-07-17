import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from 'actions';
class SongList extends Component {
    renderList() {
        return this.props.songs.map((song, index) => {
            return (
                <div className="item" key={index}>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
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
        // console.log(this.props)
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
    console.log(state)
    return {
        songs: state.songs
    }
}
export default connect(mapStateToProps, {
    selectSong  //selectSong:selectSong
})(SongList);

//connect function is returning a function


/** REDUX IS NOT MAGIC
 * Redux doesn't automatically detect action cretors being called
 * Redux doesn't automatically detect a function returning an object that is an 'action'
 *
 * */