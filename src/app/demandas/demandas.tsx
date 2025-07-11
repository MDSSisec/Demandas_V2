'use client';

import { AppSidebar } from "@/components/app-sidebar";
import { DataTable } from "@/components/data-table";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import styles from "./demandas.module.css";

// Dados de exemplo para demandas
const demandasData = [
  {
    id: 1,
    numeroDemanda: "DEM-001",
    titulo: "Implementação de sistema de login",
    status: "Em andamento",
    prazo: "15/12/2024"
  },
  {
    id: 2,
    numeroDemanda: "DEM-002",
    titulo: "Correção de bugs no dashboard",
    status: "Concluído",
    prazo: "10/12/2024"
  },
  {
    id: 3,
    numeroDemanda: "DEM-003",
    titulo: "Adicionar funcionalidade de exportação",
    status: "Pendente",
    prazo: "20/12/2024"
  },
  {
    id: 4,
    numeroDemanda: "DEM-004",
    titulo: "Otimização de performance",
    status: "Em andamento",
    prazo: "25/12/2024"
  },
  {
    id: 5,
    numeroDemanda: "DEM-005",
    titulo: "Implementação de relatórios",
    status: "Pendente",
    prazo: "30/12/2024"
  },
  {
    id: 6,
    numeroDemanda: "DEM-006",
    titulo: "Implementação de relatórios",
    status: "Suspenso",
    prazo: "30/12/2024"
  },
  {
    id: 7,
    numeroDemanda: "DEM-007",
    titulo: "Implementação de relatórios",
    status: "Pendente",
    prazo: "30/12/2024"
  },
  {
    id: 8,
    numeroDemanda: "DEM-008",
    titulo: "Implementação de relatórios",
    status: "Pendente",
    prazo: "30/12/2024"
  },
  {
    id: 9,
    numeroDemanda: "DEM-009",
    titulo: "Implementação de relatórios",
    status: "Pendente",
    prazo: "30/12/2024"
  },
];

export default function Demandas() {
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
            </div>
            <div className={styles.tableContainer}>
              <div className={styles.tableWrapper}>
                <DataTable 
                  data={demandasData} 
                  showHeaderControls={false}
                  pageSize={15}
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
