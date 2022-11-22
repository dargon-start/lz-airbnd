import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo ,useState} from 'react'
import { CenterWrapper } from './style'
import {CSSTransition} from 'react-transition-group'
import searchTitles from '@/assets/data/search_titles.json'
import Tabs from '@/base-ui/tabs'
import SearchTabs from '@/components/search-tabs'
const SearchCpm = memo((props) => {
  const { isSearch, isTop, searchBarClick } = props

  const [currentTab, setCurrentTab] = useState(0)
  const titles = searchTitles.map(item => item.title)
  function tabChange(index) {
    setCurrentTab(index)
  }

  function searchBarChange() {
    searchBarClick(true)
    // setEnded(false)
  }
  return (
    <CenterWrapper>
        <CSSTransition 
          classNames="detail" 
          in={isTop} 
          timeout={250} 
          unmountOnExit={true}
        >
        <div className='search-detail'>
          { isTop && <Tabs titles={titles} tabChange={tabChange}/> }
          <div className='infos'>
            <SearchTabs searchInfos={searchTitles[currentTab].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition
        classNames="bar" 
        in={!isTop} 
        timeout={250} 
        unmountOnExit={true}
      >
        <div className='search-bar' onClick={searchBarChange}>
          <span className='text'>搜索房源和体验</span>
          <span className='icon'>
            <IconSearchBar></IconSearchBar>
          </span>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default SearchCpm