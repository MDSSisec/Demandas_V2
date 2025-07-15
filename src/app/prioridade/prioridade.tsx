'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import styles from "./prioridade.module.css";

// Dados de exemplo para demandas com prioridade
const prioridadesData = [
  {
    id: 1,
    prioridade: 1,
    numeroDemanda: "4235678",
    titulo: "Implementação de sistema de login",
    status: "Em andamento",
    prazo: "15/12/2024"
  },
  {
    id: 2,
    prioridade: 2,
    numeroDemanda: "4235679",
    titulo: "Correção de bugs no dashboard",
    status: "Em andamento",
    prazo: "10/12/2024"
  },
  {
    id: 3,
    prioridade: 3,
    numeroDemanda: "4235680",
    titulo: "Adicionar funcionalidade de exportação",
    status: "Pendente",
    prazo: "20/12/2024"
  },
  {
    id: 4,
    prioridade: 4,
    numeroDemanda: "4235681",
    titulo: "Otimização de performance",
    status: "Pendente",
    prazo: "25/12/2024"
  },
  {
    id: 5,
    prioridade: 5,
    numeroDemanda: "4235682",
    titulo: "Implementação de relatórios",
    status: "Pendente",
    prazo: "30/12/2024"
  },
];

export default function Prioridade() {
  const [searchTerm, setSearchTerm] = useState("");
  const [prioridades, setPrioridades] = useState(prioridadesData);

  // Função para mover item para cima
  const moveItemUp = (id: number) => {
    setPrioridades(prevPrioridades => {
      const currentIndex = prevPrioridades.findIndex(item => item.id === id);
      if (currentIndex <= 0) return prevPrioridades; // Já está no topo
      
      const newPrioridades = [...prevPrioridades];
      const temp = newPrioridades[currentIndex];
      newPrioridades[currentIndex] = newPrioridades[currentIndex - 1];
      newPrioridades[currentIndex - 1] = temp;
      
      // Atualizar números de prioridade
      return newPrioridades.map((item, index) => ({
        ...item,
        prioridade: index + 1
      }));
    });
  };

  // Função para mover item para baixo
  const moveItemDown = (id: number) => {
    setPrioridades(prevPrioridades => {
      const currentIndex = prevPrioridades.findIndex(item => item.id === id);
      if (currentIndex >= prevPrioridades.length - 1) return prevPrioridades; // Já está embaixo
      
      const newPrioridades = [...prevPrioridades];
      const temp = newPrioridades[currentIndex];
      newPrioridades[currentIndex] = newPrioridades[currentIndex + 1];
      newPrioridades[currentIndex + 1] = temp;
      
      // Atualizar números de prioridade
      return newPrioridades.map((item, index) => ({
        ...item,
        prioridade: index + 1
      }));
    });
  };

  // Função para remover item da lista de prioridades
  const removeFromPriorities = (id: number) => {
    setPrioridades(prevPrioridades => {
      const newPrioridades = prevPrioridades.filter(item => item.id !== id);
      // Atualizar números de prioridade após remoção
      return newPrioridades.map((item, index) => ({
        ...item,
        prioridade: index + 1
      }));
    });
  };

  // Filtrar demandas baseado no termo de busca
  const filteredPrioridades = useMemo(() => {
    if (!searchTerm.trim()) {
      return prioridades;
    }
    
    const term = searchTerm.toLowerCase().trim();
    return prioridades.filter(demanda => 
      demanda.numeroDemanda.toLowerCase().includes(term) ||
      demanda.titulo.toLowerCase().includes(term)
    );
  }, [searchTerm, prioridades]);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h1 className={styles.title}>Prioridades</h1>
              <div className={styles.searchContainer}>
                <Input
                  type="text"
                  placeholder="Buscar por número ou título da demanda..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>
            <div className={styles.tableContainer}>
              <div className={styles.tableWrapper}>
                <DataTable 
                  data={filteredPrioridades} 
                  showHeaderControls={false}
                  pageSize={15}
                  isPrioridadePage={true}
                  onMoveUp={moveItemUp}
                  onMoveDown={moveItemDown}
                  onRemoveFromPriorities={removeFromPriorities}
                  customColumnNames={{
                    prioridade: "Prioridade",
                    numeroDemanda: "Nº Demanda",
                    titulo: "Título",
                    status: "Status",
                    prazo: "Prazo"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
