package AccessingEntities;

import Entities.Visitor;
import org.springframework.data.repository.CrudRepository;

public interface VisitorRepository extends CrudRepository<Visitor, Long> {
}
