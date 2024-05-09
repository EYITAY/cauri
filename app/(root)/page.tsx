import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Chad', lastName: 'Bauer', email : 'babaybauer@gmail.com'};
  return (
    <section className="home">
     <div className="home-content">
        <header className="home-header">
            <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="View and mange your account and transactions on the go."/>

            <TotalBalanceBox
              accounts={[]}
              totalBanks={1}
              totalCurrentBalance={17588.17}
              />
            </header>

            RECENT TRANSACTIONS
            </div>

            <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 678.50},
               {currentBalance: 500.55} ]}
            />
        </section>

  )
}

export default Home