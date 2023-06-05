                                      π j.nome, e.nome, c.nome
                                      |
                                      σ j.posicao='Atacante' ∧ je.salario>1000 ∧ ec.posicao=1 ∧ c.nome LIKE '%a%'
                                      |
                               ⋈ c.id=ec.id_campeonato
                               |
                            ⋈ e.id=ec.id_equipe
                            |
                         ⋈ j.id_equipe=e.id
                         |
                      ⋈ je.id_equipe=e.id
                      |
                  x (produto cartesiano)
                  |
           ----------------------
          |        |     |     |
          j        e     ec    c
          (jogador_brasileiro)
          (equipe)
          (equipe_campeonato)
          (campeonato)


                                      π j.nome, e.nome, c.nome
                                      |
                               ⋈ c.id=ec.id_campeonato ∧ c.nome LIKE '%a%'
                               |
                            ⋈ e.id=ec.id_equipe ∧ ec.posicao=1
                            |
                         ⋈ j.id_equipe=e.id ∧ j.posicao='Atacante'
                         |
                      ⋈ je.id_equipe=e.id ∧ je.salario>1000
                      |
           ----------------------
          |        |     |     |
          j        e     ec    c
          (jogador_brasileiro)
          (equipe)
          (equipe_campeonato)
          (campeonato)
