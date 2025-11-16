'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { useRouter } from "next/navigation";
import { IconBuilding, IconCode, IconDatabase, IconHeadphones, IconPlus } from "@tabler/icons-react";
import styles from "./cadastro.module.css";

export default function Cadastro() {
  const router = useRouter();

  const tiposDemanda = [
    {
      id: 'desenvolvimento',
      titulo: 'Desenvolvimento',
      descricao: 'Criar funcionalidades, corrigir bugs, melhorias no sistema',
      icon: IconCode,
      color: 'blue',
      rota: '/formularios/desenvolvimento'
    },
    {
      id: 'dados',
      titulo: 'Dados',
      descricao: 'Análise de dados, relatórios, dashboards, consultas',
      icon: IconDatabase,
      color: 'green',
      rota: '/formularios/dados'
    },
    {
      id: 'suporte',
      titulo: 'Suporte',
      descricao: 'Atendimento ao usuário, resolução de problemas',
      icon: IconHeadphones,
      color: 'orange',
      rota: '/formularios/suporte'
    },
    {
      id: 'institucional',
      titulo: 'Institucional',
      descricao: 'Reuniões, alinhamento e atividades internas',
      icon: IconBuilding,
      color: 'purple',
      rota: '/formularios/institucional'
    }
  ];

  const handleTipoDemanda = (rota: string) => {
    router.push(rota);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className={styles.container}>
            <div className={styles.header}>
              <h1 className={styles.title}>Cadastrar Nova Demanda</h1>
              <p className={styles.subtitle}>
                Selecione o tipo de demanda que você deseja cadastrar
              </p>
            </div>

            <div className={styles.cardsGrid}>
              {tiposDemanda.map((tipo) => {
                const IconComponent = tipo.icon;
                return (
                  <Card 
                    key={tipo.id} 
                    className={`${styles.card} ${styles[`card${tipo.color.charAt(0).toUpperCase() + tipo.color.slice(1)}`]} cursor-pointer transition-all hover:shadow-lg hover:scale-105`}
                    onClick={() => handleTipoDemanda(tipo.rota)}
                  >
                    <CardHeader className={styles.cardHeader}>
                      <div className={`${styles.iconContainer} ${styles[`icon${tipo.color.charAt(0).toUpperCase() + tipo.color.slice(1)}`]}`}>
                        <IconComponent className={styles.icon} />
                      </div>
                      <CardTitle className={styles.cardTitle}>
                        {tipo.titulo}
                      </CardTitle>
                      <CardDescription className={styles.cardDescription}>
                        {tipo.descricao}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className={styles.cardContent}>
                      <Button variant="outline" className="w-full">
                        <IconPlus className="w-4 h-4 mr-2" />
                        Cadastrar {tipo.titulo}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}