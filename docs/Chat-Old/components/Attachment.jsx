import React                      from 'react'
import { classNames }             from '../utils'
import { FocusableUponSelection } from './base/FocusableUponSelection'

class Attachment extends FocusableUponSelection {
  render() {
    return (
      <div className={this.getClassNames()}
           tabIndex={this.getTabIndexValue()}
           onClick={this.props.onClick()}
           ref={el => this.elementToFocus = el}>
        {this.props.template ? React.createElement(this.props.template, { item: this.props.template })
                             : (
                                 <div className='k-card'>
                                   <div className='k-card-body'>
                                     { this.getTitleView()    }
                                     { this.getSubtitleView() }
                                     { this.getContentView()  }
                                   </div>
                                 </div>
                               )
         
        }
      </div>
    )
  }
  
  getTabIndexValue() {
    if (this.props.tabbable === undefined)
      return undefined
    else if (this.props.tabbable)
      return 0
    else
      return -1
  }
  
  getClassNames() {
    return classNames({ 'k-state-selected': this.props.selected },
                      { 'k-state-focused': this.props.selected },
                      'k-card-wrap',
                      { 'k-first': this.props.isFirstItemInGroup },
                      { 'k-last': this.props.isLastItemInGroup })
  }
  
  getTitleView() {
    return this.props.item.title
             ? <h5 className='k-card-title'>{this.props.item.title}</h5>
             : null
  }
  
  getSubtitleView() {
    return this.props.item.subtitle
             ? <h6 className='k-card-subtitle'>{this.props.item.subtitle}</h6>
             : null
  }
  
  getContentView() {
    return this.props.item.contentType.indexOf('image/') === 0
             ? <img src={this.props.item.content} alt='img' />
             : this.props.item.content
  }
}

export default Attachment