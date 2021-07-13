
import Box from '../src/components/Box'
import MainGrid from '../src/components/MainGrid'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

function ProfileSideBar(props){
  return(
    <Box> <img src={`https://github.com/${props.githubUser}.png` } style={{borderRadius: '8px'}} /> </Box>
  )
}


// no react usa className
export default function Home() {
  const githubUser = 'CamilaPrado27';
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style = {{gridArea: 'profileArea'}}>
        <ProfileSideBar githubUser={githubUser} />
      </div>

      <div className="welcomeAre" style = {{gridArea: 'welcomeArea'}}>
        <Box className="title"> 
          <h1> Bem Vindo(a)</h1>

          <OrkutNostalgicIconSet />
        </Box>
      </div>
      
      <div className="profileRelationsArea" style = {{gridArea: 'profileRelationsArea'}}>
        <ProfileRelationsBoxWrapper> 
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
          

          <ul>
            {pessoasFavoritas.map((itemAtual) =>{
              return(
                <li>
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                  </a>
                </li>

                
              )
            }) }
          </ul>
          
        </ProfileRelationsBoxWrapper>
        
      </div>
      
    </MainGrid>
    </>
  )
}
