import { ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import BlogCard from './components/BlogCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcards />
        <ElevatedCards />
        <FancyCard />
        <BlogCard />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App