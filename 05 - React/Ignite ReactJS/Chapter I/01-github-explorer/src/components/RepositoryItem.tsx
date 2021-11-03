//Tipagem do props
interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}


export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            {/* 
                - ??: serve para dar um valor padrão para uma variável, resumindo: ?? = || 
                - ?(nulled colesing operator): nova funcionalidade do ESC6, evita um erro caso alguma propriedade de um objeto não exista
            */}
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository?.description ?? 'No description'}</p>
            <a href={props.repository.html_url} target="_blank">
                Acessar respositório
            </a>
        </li>
    );
}