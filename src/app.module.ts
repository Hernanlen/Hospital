import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CategoriasModule } from './categorias/categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CitasModule } from './citas/citas.module';

@Module({
  imports: [
    // 1. Carga las credenciales secretas desde el archivo .env
    ConfigModule.forRoot(),
    
    // 2. Inicia el motor de base de datos PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true, // Buscará nuestras clases automáticamente
      synchronize: true,      // ¡LA MAGIA! Traduce el código TypeScript a tablas SQL reales
      ssl: {
        rejectUnauthorized: false, // Requisito de seguridad obligatorio en Render
      },
    }),
    
    CategoriasModule,
    
    UsuariosModule,
    
    CitasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}