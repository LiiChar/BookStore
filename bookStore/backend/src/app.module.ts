import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { BookModule } from './book/book.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import  * as path from 'path';
import { Upload } from './file/Scalar/Upload.scalar';

@Module({
  imports: [
    ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    UsersModule,
    BookModule,
  ],
  controllers: [],
  providers: [Upload],
})
export class AppModule {}
