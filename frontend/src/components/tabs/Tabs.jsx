import styled, { css }              from 'styled-components'
import Tab                          from './Tab'

const ListTabs = styled.ul`
  padding-left: 0;
  list-style: none;
  margin: 0;
`

const TabTitleItem = styled.li`
  display: inline-block;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 16px 5px;
  cursor: pointer;
  opacity: 0.4;

  &:hover {
    opacity: 1;
  }

  ${props => props.isActiveTab && css`
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    cursor: default;
    opacity: 1;
  `}
`

const ActiveTabBorder = styled.div`
  height: 4px;
  background: ${({ theme }) => theme.colors.chat};
  position: absolute;
  bottom: 0;
  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

`

const Tabs = () => {
  return <h1>tabs</h1>
}
