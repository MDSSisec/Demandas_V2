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
import styles from "./demandas.module.css";

// Dados de exemplo para demandas
const demandasData = [
  {
    id: 1,
    numeroDemanda: "4235678",
    titulo: "Implementação de sistema de login",
    status: "Em andamento",
    prazo: "15/12/2024"
  },
  {
    id: 2,
    numeroDemanda: "4235679",
    titulo: "Correção de bugs no dashboard",
    status: "Concluído",
    prazo: "10/12/2024"
  },
  {
    id: 3,
    numeroDemanda: "4235680",
    titulo: "Adicionar funcionalidade de exportação",
    status: "Pendente",
    prazo: "20/12/2024"
  },
  {
    id: 4,
    numeroDemanda: "4235681",
    titulo: "Otimização de performance",
    status: "Em andamento",
    prazo: "25/12/2024"
  },
  {
    id: 5,
    numeroDemanda: "4235682",
    titulo: "Implementação de relatórios",
    status: "Pendente",
    prazo: "30/12/2024"
  },
  {
    id: 6,
    numeroDemanda: "4235683",
    titulo: "Correção de vulnerabilidades de segurança",
    status: "Suspenso",
    prazo: "30/12/2024"
  },
  {
    id: 7,
    numeroDemanda: "4235684",
    titulo: "Atualização da interface do usuário",
    status: "Pendente",
    prazo: "30/12/2024"
  },
  {
    id: 8,
    numeroDemanda: "4235685",
    titulo: "Integração com API externa",
    status: "Pendente",
    prazo: "30/12/2024"
  },
  {
    id: 9,
    numeroDemanda: "4235686",
    titulo: "Implementação de notificações push",
    status: "Pendente",
    prazo: "30/12/2024"
  },
  {
    id: 10,
    numeroDemanda: "4235687",
    titulo: "Criação de dashboard administrativo",
    status: "Em andamento",
    prazo: "05/01/2025"
  },
  {
    id: 11,
    numeroDemanda: "4235688",
    titulo: "Migração de banco de dados",
    status: "Pendente",
    prazo: "12/01/2025"
  },
  {
    id: 12,
    numeroDemanda: "4235689",
    titulo: "Implementação de autenticação 2FA",
    status: "Concluído",
    prazo: "08/01/2025"
  },
  {
    id: 13,
    numeroDemanda: "4235690",
    titulo: "Otimização de consultas SQL",
    status: "Em andamento",
    prazo: "15/01/2025"
  },
  {
    id: 14,
    numeroDemanda: "4235691",
    titulo: "Criação de sistema de backup automático",
    status: "Pendente",
    prazo: "20/01/2025"
  },
  {
    id: 15,
    numeroDemanda: "4235692",
    titulo: "Implementação de logs de auditoria",
    status: "Suspenso",
    prazo: "25/01/2025"
  },
  {
    id: 16,
    numeroDemanda: "4235693",
    titulo: "Desenvolvimento de API REST",
    status: "Pendente",
    prazo: "30/01/2025"
  },
  {
    id: 17,
    numeroDemanda: "4235694",
    titulo: "Testes de integração automatizados",
    status: "Em andamento",
    prazo: "05/02/2025"
  },
  {
    id: 18,
    numeroDemanda: "4235695",
    titulo: "Implementação de sistema de autenticação",
    status: "Pendente",
    prazo: "12/02/2025"
  },
];

export default function Demandas() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar demandas baseado no termo de busca
  const filteredDemandas = useMemo(() => {
    if (!searchTerm.trim()) {
      return demandasData;
    }
    
    const term = searchTerm.toLowerCase().trim();
    return demandasData.filter(demanda => 
      demanda.numeroDemanda.toLowerCase().includes(term) ||
      demanda.titulo.toLowerCase().includes(term)
    );
  }, [searchTerm]);

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
              <h1 className={styles.title}>Demandas</h1>
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
                  data={filteredDemandas} 
                  showHeaderControls={false}
                  pageSize={14}
                  customColumnNames={{
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
